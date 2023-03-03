type Job = {
    name : string; 

    state : string ;

    start : () => void ;
}

type JobRun<J extends Job>= {
    job: J; // generic type

    state : string ;

    onComplete : (cb:(job:J)=> void ) => void ;
}

type SendEmail = Job & {
    recipientEmail: string ;

    subject: string ;
}

function enqueueJob<J extends Job> (job:J): JobRun<J> {
    return {
        job,
        state: "que",
        onComplete : (cb: (job:J) => void ) => cb(job),
    }
    // enqueue job
}

const j : SendEmail = {
    recipientEmail: "abc@abc.com",
    subject: "Hello World",
}

const run = enqueueJob(j);

run.onComplete((job) => {
    console.log(job.recipientEmail);
});