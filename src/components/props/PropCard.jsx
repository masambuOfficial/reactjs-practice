/* eslint-disable react/prop-types */

function PropCard(props) {
  return (
    <div>
        <section >
        <div id="card__container">
            <i className={props.icon}></i>
            <div>
                <h1>{props.heading}</h1>
                <p>{props.paragraph}</p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default PropCard