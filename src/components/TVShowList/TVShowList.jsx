import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

export const TVShowList = ({ tvShowList }) => {
  return (
    <div>
      <div className={s.title}>You'll probably like :</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span className={s.tv_show_item} key={tvShow.id}>
              <TVShowListItem
                tvShow={tvShow}
                onClick={() => console.log("todo")}
              />
            </span>
          );
        })}
      </div>
      {/* <TVShowListItem
        tvShow={currentTVShow}
        onClick={(tvShow) => console.log("i have been clicked", tvShow)}
      />
      <TVShowListItem
        tvShow={currentTVShow}
        onClick={(tvShow) => console.log("i have been clicked", tvShow)}
      />
      <TVShowListItem
        tvShow={currentTVShow}
        onClick={(tvShow) => console.log("i have been clicked", tvShow)}
      /> */}
    </div>
  );
};
