import { Link } from "react-router-dom";

export function NoMatch() {


  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to="/">Take Me Home!</Link>
    </div>
  );
}