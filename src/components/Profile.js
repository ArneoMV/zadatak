import { people } from "../data/data.js";
import { getImageUrl } from "../data/utils.js";

export default function Profile({ person }) {
  return (
    <li>
      <img src={getImageUrl(person)} alt={person.name} />
      <div>
        <p>
          <b>{person.name}</b>
        </p>
        <p className="chip">{person.profession}</p>
        <p>known for {person.accomplishment}</p>
      </div>
    </li>
  );
}
