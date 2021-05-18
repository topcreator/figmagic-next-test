import React from 'react';
import ListCardStyled from './ListCard.style';

export default function index() {
  return (
    <ListCardStyled>
      <div className="list-card-header">
        <span>Catalog Breakdown</span>
        <span>1962 to 2017</span>
      </div>
      <div className="list-card-content">
        <span className="category-label"><span>Audio Masters</span></span>
        <span className="category-value">
          <span className="double-dot">:</span>
          <span>2761</span>
        </span>
        <span className="item-label">Artists</span>
        <span className="item-value">
          <span className="double-dot">:</span>
          <span>149</span>
        </span>
        <span className="item-label">Albums</span>
        <span className="item-value">
          <span className="double-dot">:</span>
          <span>347</span>
        </span>
        <span className="item-label">EPs</span>
        <span className="item-value">
          <span className="double-dot">:</span>
          <span>181</span>
        </span>
        <span className="item-label">Singles</span>
        <span className="item-value">
          <span className="double-dot">:</span>
          <span>92</span>
        </span>
        <span className="category-label"><span>Video Masters</span></span>
        <span className="category-value">
          <span className="double-dot">:</span>
          <span>2761</span>
        </span>
        <span className="item-label">Promo Videos</span>
        <span className="item-value">
          <span className="double-dot">:</span>
          <span>149</span>
        </span>
        <span className="item-label">Lip Syncs</span>
        <span className="item-value">
          <span className="double-dot">:</span>
          <span>347</span>
        </span>
        <span className="item-label">Art Tracks</span>
        <span className="item-value">
          <span className="double-dot">:</span>
          <span>181</span>
        </span>
        <span className="item-label">Live</span>
        <span className="item-value">
          <span className="double-dot">:</span>
          <span>92</span>
        </span>
        <span className="item-label">Interviews & Docs</span>
        <span className="item-value">
          <span className="double-dot">:</span>
          <span>92</span>
        </span>
      </div>
      <div className="list-card-footer">
        <a href="#" className="link">details</a>
      </div>
    </ListCardStyled>
  )
}
