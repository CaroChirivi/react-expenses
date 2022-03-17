import { Fragment } from "react/cjs/react.production.min";
import MealsSummary from "./MealSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary/>
            <AvailableMeals/>
        </Fragment>
    );
}

export default Meals;