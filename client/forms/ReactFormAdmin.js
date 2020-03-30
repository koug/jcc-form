import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Wrapper } from "../inputs/react/Wrapper";

export const ReactFormAdmin = ({ type, id, ...props }) => {
  const { application, ready } = useTracker(() => {
    const subscription = Meteor.subscribe("application", id);

    const application = Applications.findOne({ _id: id });
    return { application, ready: subscription.ready() };
  }, []);
  console.log(application, id, type);

  if (ready) {
    return (
      <div>
        {Object.keys(application).map((key, i) => {
          let value = application[key].toString()
          if (key.endsWith("Id")) value = <a href={`/files/${application[key]}`} target="_blank">Download</a>

          
          return (
            <div key={i}>
              <Wrapper label={key}><div>{value}</div></Wrapper>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};

Template.reactFormAdmin.helpers({
  ReactFormAdmin() {
    return ReactFormAdmin;
  }
});
