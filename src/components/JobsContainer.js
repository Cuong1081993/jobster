import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import Loading from "./Loading";
import { getAllJobs } from "../features/allJobs/allJobSlice";
const JobsContainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <h2>
          <Loading center />
        </h2>
      </Wrapper>
    );
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No job to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>jobs info</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;