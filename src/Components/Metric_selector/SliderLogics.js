import TimelineSlider from "./MetricSlider";

function Slide() {
    const handleYearChange = (yearRange) => {
        console.log(`Selected year range: ${yearRange[0]} - ${yearRange[1]}`);
      };
    
      return (
        <div>
          <h1>Timeline Slider Example</h1>
          <TimelineSlider onYearChange={handleYearChange} />
        </div>
      );
    }
    
  export default Slide;
  