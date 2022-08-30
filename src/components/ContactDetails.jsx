const ContactDetails = (props) => {
  return (
    <div className="contactDetails">
      <p>
        {props.items[0]} {props.items[1]}
      </p>
    </div>
  );
};
export default ContactDetails;
