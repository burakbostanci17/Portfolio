import './contact.scss'

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/e-mail-3597088_1280.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit' onClick={handleSubmit}>Send</button>
        </form>
        
      </div>
    </div>
  )
}
