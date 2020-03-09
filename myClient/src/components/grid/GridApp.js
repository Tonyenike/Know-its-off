import React, { useContext, useEffect } from "react";
import DragItem from "./DragItem";
import { Grid, GridImage, GridItem } from "./Grid";
import GridContext from "./GridContext";
import Tile from "../tile.js";

function GridApp(props) {
  const {items, moveItem} = useContext(GridContext);
  console.log(items)

  return (
    <div className="GridApp">
      <Grid>
        {items.map(item => (
          <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
            <GridItem>
            {/*<GridImage src={item.src}></GridImage>*/}
              <Tile key={item.id} scout_id={item.id} scout_name={item.name} scout_battery={item.battery_power} appliance_name={item.appliance_name} appliance_type={item.appliance_type} appliance_status={item.appliance_status}/>
            </GridItem>
          </DragItem>
        ))}
      </Grid>
    </div>
  );
}

export default GridApp;