import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Wrapper } from "../inputs/Wrapper";

export const ReactFormAdmin = ({ type, id, ...props }) => {
  const { application, ready } = useTracker(() => {
    const subscription = Meteor.subscribe("application", id);

    const application = Applications.findOne({ _id: id });
    return { application, ready: subscription.ready() };
  }, []);

  const { applicationType, readyType } = useTracker(() => {
    if (ready) {
      const subscription = Meteor.subscribe("applicationType", type);
      const applicationType = ApplicationType.findOne({ applicationType: type });
      return { applicationType, readyType: subscription.ready() }
    }
    else return { }
  }, [ready])

  const generateFields = (definition, data) => {
    ret = (
      <div>
        {definition
          .filter(d => d.type !== "html")
          .map((key,i) => {
            return <Wrapper key={i} label={key.label}>
              {((key) => {
                switch (key.type) {
                  case "groupArray":
                    return (
                      <ul className="list-group">
                        {data[key.name].map((d, i) => {
                          return (
                            <li key={i} className="list-group-item">
                              <div>{generateFields(key.definition, d)}</div>
                              <div style={{clear: "both"}}></div>
                            </li>
                          );
                        })}
                      </ul>
                    );
                  case "file":
                    console.log(data, key.name);
                    
                    return (
                      <div>
                        <a href={`/files/${data[key.name + "Id"]}`} target="_blank">
                          Download
                        </a>
                      </div>
                    );
                  default:
                    return <div>{data[key.name]}</div>;
                }
              })(key)}
            </Wrapper>
         })
        }
      </div>
    );

    return ret;
  }

  if (readyType) {
    return (
      <div>
        {generateFields(applicationType.definition, application)}
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
