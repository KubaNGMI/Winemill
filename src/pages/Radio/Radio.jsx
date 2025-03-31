import React from 'react';
import styled from 'styled-components';

const Radio = () => {
  return (
    <StyledWrapper>
      <div className="select">
        <div className="selected" data-default="Бестселлеры" data-one="Новинки" data-two="Популярное" data-three="Винтаж">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="arrow">
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </div>
        <div className="options">
          <div title="Бестселлеры">
            <input id="all" name="option" type="radio" defaultChecked />
            <label className="option" htmlFor="all" data-txt="Бестселлеры" />
          </div>
          <div title="Новинки">
            <input id="option-1" name="option" type="radio" />
            <label className="option" htmlFor="option-1" data-txt="Новинки" />
          </div>
          <div title="Популярное">
            <input id="option-2" name="option" type="radio" />
            <label className="option" htmlFor="option-2" data-txt="Популярное" />
          </div>
          <div title="Винтаж">
            <input id="option-3" name="option" type="radio" />
            <label className="option" htmlFor="option-3" data-txt="Винтаж" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .select {
    width: fit-content;
    cursor: pointer;
    position: relative;
    transition: 300ms;
    color: white;
    overflow: hidden;
    top:45px
  }

  .selected {
    background-color: transperent;
    padding: 5px;
    margin-bottom: 3px;
    border-radius: 5px;
    position: relative;
    z-index: 100000;
    font-size: 15px;
    display: flex;
    align-items: center;
    font-family:'Roboto'
 
  }

  .arrow {
    position: relative;
    right: 0px;
    height: 10px;
    transform: rotate(-90deg);
    width: 25px;
    fill: white;
    z-index: 100000;
    transition: 300ms;
  }

  .options {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 5px;
    background-color: transperent;
    position: relative;
    top:100px;
    opacity: 0;
    transition: 300ms;
    overflow:hidden;
  }

  .select:hover > .options {
    opacity: 1;
    top: 0;
    cursor:pointer
  }

  .select:hover > .selected .arrow {
    transform: rotate(0deg);
  }

  .option {
    border-radius: 5px;
    padding: 5px;
    transition: 300ms;
    background-color: transperent;
    width: 150px;
    font-size: 15px;
    font-family:'Roboto'
  }
  .option:hover {
    background-color: transperent;
        cursor:pointer


  }

  .options input[type="radio"] {
    display: none;
  }

  .options label {
    display: inline-block;
  }
  .options label::before {
    content: attr(data-txt);
  }

  .options input[type="radio"]:checked + label {
    display: none;
  }

  .options input[type="radio"]#all:checked + label {
    display: none;
  }

  .select:has(.options input[type="radio"]#all:checked) .selected::before {
    content: attr(data-default);
  }
  .select:has(.options input[type="radio"]#option-1:checked) .selected::before {
    content: attr(data-one);
  }
  .select:has(.options input[type="radio"]#option-2:checked) .selected::before {
    content: attr(data-two);
  }
  .select:has(.options input[type="radio"]#option-3:checked) .selected::before {
    content: attr(data-three);
  }`;

export default Radio;
