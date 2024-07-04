const StoppageForm = ({ threshold, setThreshold }) => {
    const handleThresholdChange = (e) => {
      setThreshold(Number(e.target.value));
    };
  
    return (
      <div>
        <label>Stoppage Threshold (minutes): </label>
        <input type="number" value={threshold} onChange={handleThresholdChange} />
      </div>
    );
  };
  
  export default StoppageForm;