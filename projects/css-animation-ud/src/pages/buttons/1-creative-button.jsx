import styles from "./1-creative-button.module.css";

const CreativeButton = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-36 ">
        <div className="flex gap-10 items-center p-4">
          <button className={`${styles.btn} ${styles.rotateBtn}`}>
            Rotate Button
          </button>
          <button className={`${styles.btn} ${styles.swipeBtn}`}>
            Swipe Button
          </button>
          <button className={`${styles.btn} ${styles.centerToSurroundingBtn}`}>
            Center To Surrounding
          </button>
          {/* 如果不使用div，那么当字体变粗，字间距变化后，应该是通过盒子模型，影响其他几个button */}
          <div className={`${styles.buttonWrapper} `}>
            <button className={`${styles.btn} ${styles.stretchingBtn}`}>
              Stretch Button
            </button>
          </div>
          <div className="flex flex-col">
            <span>从上到下覆盖原有的内容</span>
            <button className={`${styles.btn} ${styles.coverBtn}`}>
              Hover Me
            </button>
          </div>
        </div>
        <div className="flex gap-10 items-center p-4">
          <div className="flex flex-col">
            <span>斜杠从左向右</span>
            <button className={`${styles.btn} ${styles.slantSlidingBtn}`}>
              Hover Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeButton;
