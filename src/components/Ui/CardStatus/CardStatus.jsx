import Uistyle from "./CardStatus.module.css"
function CardStatus(){
    return(
        <>

    <div className={`${Uistyle.cardstatus} d-flex align-item-center rounded mt-5  `} >
        <div className={`${Uistyle.icon} w-100 d-flex justify-content-center align-item-center`}>
         <i className="fa-regular fa-building d-f align-content-center"></i>       </div>
        <div className={`${Uistyle.info} d-flex flex-column w-100 pt-4`}>
            <span className={Uistyle.counter}>120</span>
            <span className={Uistyle.title}>projects</span>
        </div>

    </div>


    
        </>
    )
}
export default CardStatus ;