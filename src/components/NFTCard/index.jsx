import classes from "../../styles/components/NFTCard/index.module.scss";
import Ethereum from "../../icons/Ethereum";
import Clock from "../../icons/Clock";

const NFTCard = () => {
  return (
    <div className={classes.container}>
      <figure className={classes.nft_picture}>
        <img src="/image-equilibrium.jpg" />
      </figure>
      <strong className={classes.title}>Equilibrium #3429</strong>
      <p className={classes.description}>
        Our Equilibrium collection promots balance and calm
      </p>
      <div className={classes.price_container}>
        <span className={classes.price}>
          <Ethereum />
          0.041 ETH
        </span>
        <span className={classes.days_left}>
          <Clock />3 days left
        </span>
      </div>
      <div className={classes.creator_container}>
        <figure className={classes.creator_picture}>
          <img src="/image-avatar.png" />
        </figure>
        <span clsasName={classes.creator_about}>
          Creation of <span>Jules Wyvern</span>
        </span>
      </div>
    </div>
  );
};

export default NFTCard;
