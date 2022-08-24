import s from './Button.module.scss';

function Button({ onClickAdd }) {
  return (
    <button className={ s.button } type="button" onClick={ onClickAdd }>
      Do you want more, Sweet?
    </button>
  );
}

export default Button;
