import React from 'react';
 
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
 import {CollecionOverviewContainer, GridContainer} from './collection-overview.styles';

const CollecionOverview = ({gallery}) => {

return (

    <CollecionOverviewContainer>
            <h2>theme</h2>
                <GridContainer>
                        <p>pictures</p>
                        {/* { gallery.map((galleryItem,index)=>{
                            return (
                                <div key={index} className={`image image-${index+1}`}>
                                    <Link to={`/gallery/${galleryItem.id}`} key={index}>           
                                <img src={`/gallery/${galleryItem.pictureUrl}.jpg`} alt={`${galleryItem.title}`}/></Link>
                                </div>
                                );
                            })
                        }                     */}
                </GridContainer>
    </CollecionOverviewContainer>
  
)
}

const mapStateToProps = state => ({
  gallery: state.gallery,
}); 

export default connect(mapStateToProps)(CollecionOverview);
