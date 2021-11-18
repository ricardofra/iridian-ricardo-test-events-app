import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Betslip.scss';

const Betslip = (props: any) => {

  const cardElement: any = document.querySelector('.card');
  const handleSideMenuOpen = (event: any) => {
    cardElement.classList.toggle('open')
  }

  return (
    <>
      <header className='header'>
        <button className='header__btn' onClick={(e) => handleSideMenuOpen(e)} ><FontAwesomeIcon icon={faBars} /></button>
      </header>
      <div className="card">
        <div className="card__top">
          <button className='card__top__btn' onClick={(e) => handleSideMenuOpen(e)} ><FontAwesomeIcon icon={faTimes} /></button>
        </div>
        <div className="card__content">
          {props.betSlipList.map((bet: any) =>
            <div className='card__content__item' key={bet.id}>
              <p className="card__content__title">{bet.title} </p>
              <p className="card__content__name">{bet.name}</p>
              <p className="card__content__price">{bet.price}</p>
              <button  className="card__content__btn"onClick={(e) => props.onDeleteBetSlips(bet.id , bet.marketId)}>delete</button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Betslip;
