import React from "react";
import './collection.styles.scss';
import CollectionItem from "../../components/collection-item/collection-item.component";


const CollectionPage = ({ match }) => {
    console.log(match.params.collectionId);
    return(
    <div className="collection-page">
        <h2>collection PAGE</h2>
    </div>
    );
};

export default CollectionPage;