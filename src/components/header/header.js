import React from 'react';
import './header.css'
import { ReactComponent as PlayIcon} from '../../assets/icons/ic-play.svg';
import { ReactComponent as ListIcon} from '../../assets/icons/ic-list.svg';
import { ReactComponent as TrendingIcon} from '../../assets/icons/ic-trending.svg';


const Header = props => {
    return (
        <div className="header-container row">
            <div className="col-auto"> 
                <h1 className="header-title">Recommended</h1>
            </div>
            <div className="header-button col-auto"> 
                <div className="row align-items-center h-100">
                    <PlayIcon className="header-button-icon"/>
                    <p className="header-button-text">Movies</p>
                </div>
            </div>
            <div className="header-button col-auto">
                <div className="row align-items-center h-100">
                    <ListIcon className="header-button-icon"/> 
                    <p className="header-button-text">Tv Shows</p>
                </div>
            </div>
            <div className="header-button col-auto">
                <div className="row align-items-center h-100">
                    <TrendingIcon className="header-button-icon"/>
                    <p className="header-button-text">Trending</p> 
                </div>
            </div>
        </div>
    )

}

export default Header;