import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


function MyButton() {
    return (
      <button>
        I'm a button
      </button>
    );
  }

function Example() {
  return (
    <div>
      <h1>
        Exmplo de button
        <Badge bg="secondary" as={Button}>New</Badge>
      </h1>
      <MyButton />
    </div>
  );
}

export default Example;