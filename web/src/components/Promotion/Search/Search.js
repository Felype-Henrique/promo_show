import React, { useState, useEffect} from "react";
import axios from 'axios';
import PromotionCard from "../Card/Card";
import { Link } from "react-router-dom";

import './Search.css'

const PromotionSearch = () => {
    const [promotions, setPromotions] = useState([]);
    const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/promotions?_embed=comments')
      .then((response) => {
        setPromotions(response.data);
      });
  }, []);

  return (
      <div className="promotion-search">
        <header className="promotion-search__header">
          <h1>Promo Show</h1>
          <Link to="/create">Nova Promoção</Link>
        </header>
          <input 
          type="search" 
          className="promotion-search__input" 
          placeholder="Buscar"
          value={search }
          onChange={(ev) => setSearch(ev.target.value)}
          />
          {promotions.map((promotion) => (
        <PromotionCard promotion={promotion} />
      ))}
      </div>
  )

};

export default PromotionSearch;