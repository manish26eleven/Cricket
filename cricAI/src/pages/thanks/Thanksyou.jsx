import './Thanksyou.css';
import thanks from  '../../assets/forms/thanks.svg';
const Thanksyou = () => {
    return (
        <div className='thanks-div'>
        <img src={thanks} className='thanks-img'
        />
        <span className='thanks-title'>
            Thank you
        </span>
        <span className='thanks-desc'>
        Your submission has been received. Our team will get back to you shortly.
        </span>

        </div>
    );
}
export default Thanksyou;