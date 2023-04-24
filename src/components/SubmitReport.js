export default function SubmitReport({ formData, handleSelect }) {
  const now = new Date().toISOString().substring(0, 10);
  return (
    <div className="form__inputs">
      <div className="form__group">
        <label htmlFor="interviewDate">Interview Date</label>
        <br />
        <input
          type="date"
          value={formData.interviewDate}
          id="interviewDate"
          name="interviewDate"
          onChange={handleSelect}
          required
          max={now}
        />
      </div>

      <div className="form__group">
        <label htmlFor="phase">Phase</label>
        <br />
        <select
          id="phase"
          value={formData.phase}
          name="phase"
          onChange={handleSelect}
          required
        >
          <option value="">- Select -</option>
          <option value="cv">CV</option>
          <option value="hr">HR</option>
          <option value="tech">Tech</option>
          <option value="final">Final</option>
        </select>
      </div>

      <div className="form__group">
        <label htmlFor="status">Status</label>
        <br />
        <select
          id="status"
          value={formData.status}
          name="status"
          onChange={handleSelect}
          required
        >
          <option value="">- Select -</option>
          <option value="passed">Passed</option>
          <option value="declined">Declined</option>
        </select>
      </div>

      <div className="form__group">
        <label htmlFor="notes">Notes</label>
        <br />
        <textarea
          id="notes"
          value={formData.notes}
          name="notes"
          onChange={handleSelect}
          required
          rows={10}
        />
      </div>
    </div>
  );
}
