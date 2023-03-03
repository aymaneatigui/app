import { PropTypes } from "prop-types";
export const Person = (props) => {

    return (
        <div>
            <h1>name : {props.name}</h1>
            <h1>age : {props.age}</h1>
            {props.friends.map((friends) => (
                <h1>friends : {friends}</h1>
            ))}
        </div>
    );  
};

Person.prototype = {
    name : PropTypes.string,
    age : PropTypes.number,
    friends : PropTypes.arrayOf(PropTypes.string)
}