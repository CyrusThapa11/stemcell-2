/* eslint-disable no-unused-vars */
import React from "react";
import "flowbite";

const Accordian = () => {
  return (
    <div className="transition-all ease-in">
      <div className="  transition-all  mx-auto bg-white rounded-xl shadow-xl">
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="lg:w-[55vw]"
        >
          <h2 id="accordion-collapse-heading-1 transition-all ease-in">
            <button
              type="button"
              className="flex items-center   dark:focus:ring-gray-800 justify-between p-5 w-full font-medium text-left  dark:border-gray-700 border-b-0 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-xl"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span className="text-wrap">
                Why are umbilical cord blood stem cells preferred over other
                sources of stem cells? Is it worth storing stem cells?
              </span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0 rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            aria-labelledby="accordion-collapse-heading-1 transition-all ease-in"
          >
            <div className="p-5 border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-0 transition-all ease-in">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Cord Blood Stem Cells have high regenerative properties & the
                ability to transform into different types of blood cells.
                Currently, they are used to treat 90+ life-threatening medical
                conditions. By storing your baby’s precious cord blood with
                LifeCell, you can now protect not just the baby but the entire
                family including parents, siblings, maternal & paternal
                grandparents from the impact of 82+ blood related medical
                conditions. Also, cord blood cells does not have to be exactly
                matched to the patient like bone marrow transplants from an
                adult donor, thereby, this makes it 10-100x more easier to find
                a match through umbilical cord blood units as compared to adult
                bone marrow o Moreover, they can be easily collected at birth
                with no harm to mother or baby.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-2 transition-all ease-in">
            <button
              type="button"
              className="flex items-center   dark:focus:ring-gray-800 justify-between p-5 w-full font-medium border-gray-200 dark:border-gray-700 border-b-0 text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-collapse-body-2"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-2"
            >
              <span>What are the applications of cord blood stem cells?</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-2"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-2 transition-all ease-in"
          >
            <div className="p-5 border-gray-200 dark:border-gray-700 border-b-0 transition-all ease-in">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                As a result of their ability to self-renew and differentiate
                into different cell types, stem cells have found applications in
                the treatment of various diseases. Currently, the FDA has
                approved the treatment of over 90+ diseases using cord blood
                stem cells. Stem Cell Transplant is a standard treatment in
                blood cancers (various types of leukaemia, lymphoma, and
                myeloma). It has broadening & novel applications in
                non-cancerous diseases including Blood disorders (Aplastic
                anaemia, Beta thalassemia)metabolic disorders and immune
                disorders . With ongoing research and developments in the field
                of stem cells, treatment of various debilitating ailments shows
                promising results.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-3 transition-all ease-in">
            <button
              type="button"
              className="flex items-center   dark:focus:ring-gray-800 border-gray-200 dark:border-gray-700 justify-between p-5 w-full font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-collapse-body-3"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-3"
            >
              <span>How much does stem cell banking cost?</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-3"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-3 transition-all ease-in"
          >
            <div className="p-5 border-gray-200 dark:border-gray-700 border-t-0 transition-all ease-in">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                EthCellBank offers a number of flexible storage plans at an
                affordable price. The EMI starts at Rs. 950/month. For more
                information on pricing & offers, click here.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-4 transition-all ease-in">
            <button
              type="button"
              className="flex items-center   dark:focus:ring-gray-800 border-gray-200 dark:border-gray-700 justify-between p-5 w-full font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-collapse-body-4"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-4"
            >
              <span>When do I have to register with LifeCell?</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-4.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-4"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-4 transition-all ease-in"
          >
            <div className="p-5 border-gray-200 dark:border-gray-700 border-t-0 transition-all ease-in">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                You can register with LifeCell anytime before your expected
                delivery date. We suggest you enrol with us during your second
                or initial phase of the third trimester to avail an early-bird
                discount and other exciting offers. Yet to make a decision on
                stem cell banking? Let our experts help you make the right
                decision. Book an appointment with us today! Click Here
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-5 transition-all ease-in">
            <button
              type="button"
              className="flex items-center   dark:focus:ring-gray-800 border-gray-200 dark:border-gray-700 justify-between p-5 w-full font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-collapse-body-5"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-5"
            >
              <span>Is the cord blood collection process painful?</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-4.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-5"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-5 transition-all ease-in"
          >
            <div className="p-5 border-gray-200 dark:border-gray-700 border-t-0 transition-all ease-in">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Cord blood is a fairly simple and non-invasive process to
                collect. There is absolutely no pain or risk to the mother or
                child.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-6 transition-all ease-in">
            <button
              type="button"
              className="flex items-center   dark:focus:ring-gray-800 border-gray-200 dark:border-gray-700 justify-between p-5 w-full font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-collapse-body-6"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-6"
            >
              <span>
                What if I wish to add more family members to the community
                banking program?
              </span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-4.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-6"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-6 transition-all ease-in"
          >
            <div className="p-5 border-gray-200 dark:border-gray-700 border-t-0 transition-all ease-in">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Yes! You can now extend stem cell protection to extended family
                members including biological siblings of the parents, their
                spouses and the children \= 2 years with LifeCell’s Family
                Floater Plan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
