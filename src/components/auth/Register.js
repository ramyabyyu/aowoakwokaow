import { Alert } from 'react-bootstrap';
import { useMutation } from 'react-query';
import { API } from '../../config/api';


const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
  
      // Configuration Content-type
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
  
      // Data body
      const body = JSON.stringify(form);
  
      // Insert data user to database
      const response = await API.post('/register', body, config);
  
      // Handling response here
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  <form onSubmit={(e) => handleSubmit.mutate(e)}>
    
  </form>