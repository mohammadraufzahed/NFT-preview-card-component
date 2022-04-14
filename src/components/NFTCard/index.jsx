import classes from "../../styles/components/NFTCard/index.module.scss";

const NFTCard = () => {
  return (
    <div className={classes.container}>
      <figure className={classes.nft_picture}>
        <img />
      </figure>
      <strong className={classes.title}>Equilibrium #3429</strong>
      <p className={classes.description}>
        Our Equilibrium collection promots balance and calm
      </p>
      <div className={classes.price_container}>
        <span className={classes.price}>0.041ETH</span>
        <span className={classes.days_left}>3 days left</span>
      </div>
      <div className={classes.creator_container}>
        <figure className={classes.creator_picture}>
          <img />
        </figure>
        <span clsasName={classes.creator_about}>Creation of JulesWyvern</span>
      </div>
    </div>
  );
};

export default NFTCard;
