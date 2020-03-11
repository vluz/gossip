import { Button } from "antd";
export default function({ icon, onSelectValue, title, options }) {
  function handleClick(value) {
    onSelectValue && onSelectValue(value);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: (screen.width * 0.8) / 6
      }}
    >
      <Button icon={icon} type="primary" />
      <div>{title}</div>
      {options ? (
        <>
          <div>
            <Button
              icon="down"
              type="primary"
              onClick={() => handleClick("brother")}
            />
            <Button
              icon="right"
              type="primary"
              onClick={() => handleClick("children")}
            />
          </div>
        </>
      ) : (
        <Button
          icon="check"
          type="primary"
          onClick={() => handleClick("ideas")}
        />
      )}
    </div>
  );
}
