import React from "react";
import CollectionPreviewElementContainer from './collection-preview-element.styles';
import {connect} from 'react-redux';

const CollectionPreviewElement = ({collectionPreviewItems}) => {
    return (
                    <>
                        {
                            collectionPreviewItems.map(({id, title})=>(
                                <div>
                                    <h2>{title}</h2>
                                    <div>firs artwork</div>
                                </div>
                            ))
                            
                        }
                    </>
    )
}

// const mapStateToProps = state => ({
//   gallery: state.gallery,
//   collections:state.collections
// }); 

// export default connect(mapStateToProps)(CollectionPreviewElement);
export default CollectionPreviewElement