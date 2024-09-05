type ContactFormStyles = {
  formStyle: string;
  inputStyle: string;
  buttonStyle: string;
  inputPlaceholder: string;
  buttonValue: string;
};

const ContactForm = ({
  formStyle,
  inputStyle,
  buttonStyle,
  inputPlaceholder,
  buttonValue,
}: ContactFormStyles) => {
  return (
    <form className={formStyle}>
      <input
        className={inputStyle}
        placeholder={inputPlaceholder}
        type="text"
      />
      <input className={buttonStyle} type="submit" value={buttonValue} />
    </form>
  );
};

export default ContactForm;
