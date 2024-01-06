import bgsyp from '../images/start-project.jpg';

const Startsyourproject = () => {
    return(
        <section className="sec-Startsyourproject">
            <div className="bg-Startsyourproject">
                <img src={bgsyp} />
            </div>
            <div className='content-Startsyourproject'>
                <div className='container'>
                    <div className='bigtitle'>Lets Get Started<br />your project</div>
                    <div className='text'>We will help you to achieve your goals and to grow your business.</div>
                    <div className='btnsyp'>
                        <a href='#'>Start Now</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Startsyourproject; 