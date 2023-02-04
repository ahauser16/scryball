export default function Contact() {
  return (
    <div>
      <h3>Contact Us</h3>
      <form>
        <label>
            <span>Your email:</span>
            <input type="email" name="email" required />
        </label>
        <label>
            <span>Your message:</span>
            <input name="message"  required />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
