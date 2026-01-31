import { Loader } from "./Loader";

export function InfoBar({ location, isLoading }) {
  return (
    <div className="info-bar">
      <div className="info-item">
        <h6>IP ADDRESS</h6>
        {isLoading ? (
          <Loader width={40} height={40} />
        ) : (
          <p>{location?.query}</p>
        )}
      </div>
      <div className="info-item">
        <h6>LOCATION</h6>
        {isLoading ? (
          <Loader width={40} height={40} />
        ) : (
          <p>
            {location?.country}, {location?.city}
          </p>
        )}
      </div>
      <div className="info-item">
        <h6>TIMEZONE</h6>
        {isLoading ? (
          <Loader width={40} height={40} />
        ) : (
          <p>{location?.timezone}</p>
        )}
      </div>
      <div className="info-item">
        <h6>ISP</h6>
        {isLoading ? <Loader width={40} height={40} /> : <p>{location?.isp}</p>}
      </div>
    </div>
  );
}
