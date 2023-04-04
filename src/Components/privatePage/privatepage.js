import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { verify } from '../../services/rupturaAPI';

export default function PrivatePage({ children }){
  const [isAllowed, setIsAllowed] = useState(undefined);

  useEffect(() => {
    const data = localStorage.getItem("ruptura");
    if(!data) {
     return setIsAllowed(false);
    }
    
    const promise = verify()
      promise.then((r) => {
          setIsAllowed(true)
      })
      promise.catch((r) => {
          localStorage.clear()
          alert(
					'Your login credentials is expired or invalid.\nPlease, sign-in again'
				);
				setIsAllowed(false);
      })
  
  }, [])

	
	if (isAllowed === undefined) {
		return;
	}

	return isAllowed === false ? (
		<Navigate to="/sign-in" replace />
	) : (
		<>
			{children}
		</>
	);
}
