import PromotionForm from "components/Promotion/Form/Form";
import UIContainer from "components/Promotion/UI/Container/Container";
import React from "react";
import { useParams } from "react-router";

const PagesPromotionForm = () => {
    const {id } = useParams();

    return (
    <UIContainer>
      <PromotionForm />  
    </UIContainer>
    );
};

export default PagesPromotionForm;