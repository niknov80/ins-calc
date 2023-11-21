import React from "react";
import Modal from "../../ui/modal/modal";

const MoreProductCard = ({
  active,
  setActive,
  name,
  article,
  price
}) => {
  return (
    <Modal active={active} setActive={setActive}>
      <h2>{name}</h2>
      <p>{article}</p>
      <p>{price}</p>
      <p>Технические характеристики</p>
      <dl>
        <dt>Название характеристики</dt>
        <dd>Описание характеристики</dd>
      </dl>
    </Modal>
  )
}
export default MoreProductCard;
