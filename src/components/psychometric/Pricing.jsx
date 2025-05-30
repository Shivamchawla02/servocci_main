import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";

const Pricing = () => {
  return (
    <section
      id="pricing"  // Added id here for scroll target
      className="relative z-10 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Psychometric Test Plans
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Choose the plan that best suits your needs for career insight and personal development.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center gap-8">
          <PricingCard
            type="Free Psychometric Test"
            price="₹0"
            subscription="once"
            description="A basic assessment to help you understand your personality and interests."
            buttonText="Start Free Test"
          >
            <List>1 Attempt</List>
            <List>Basic Personality Report</List>
            <List>Interest Analysis</List>
            <List>Career Suggestion Summary</List>
          </PricingCard>

          <PricingCard
            type="Advanced Psychometric Test"
            price="₹999"
            subscription="once"
            description="In-depth analysis with personalized career and psychological insights."
            buttonText="Upgrade to Advanced"
            active
          >
            <List>3 Attempts</List>
            <List>Detailed Personality Breakdown</List>
            <List>Interest + Aptitude Assessment</List>
            <List>Personalized Career Roadmap</List>
            <List>Downloadable PDF Report</List>
            <List>Email & Chat Support</List>
          </PricingCard>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

// Card component
const PricingCard = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  active,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (type === "Free Psychometric Test") {
      // Do nothing, handled by Link
    } else {
      // You can replace this with real payment or upgrade logic
      navigate("/upgrade");
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full px-4 md:w-1/2 lg:w-1/3 flex"
    >
      <div
        className={clsx(
          "relative z-10 flex flex-col justify-between w-full rounded-[10px] border-2 px-8 py-10 shadow-lg sm:p-12 lg:px-6 lg:py-10 xl:p-[50px] min-h-[600px]",
          active
            ? "border-primary bg-primary/5 dark:border-primary/50"
            : "border-stroke bg-white dark:border-dark-3 dark:bg-dark-2"
        )}
      >
        <div>
          <span className="mb-3 block text-lg font-semibold text-primary">{type}</span>
          <h2 className="mb-5 text-[42px] font-bold text-dark dark:text-white">
            {price}
            <span className="text-base font-medium text-body-color dark:text-dark-6">
              / {subscription}
            </span>
          </h2>
          <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6">
            {description}
          </p>
          <div className="mb-9 flex flex-col gap-3">{children}</div>
        </div>

        {type === "Free Psychometric Test" ? (
          <Link
            to="/free-test"
            className={clsx(
              "block w-full rounded-md p-3 text-center text-base font-medium transition",
              active
                ? "bg-primary text-white hover:bg-primary/90"
                : "border border-stroke text-primary hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3"
            )}
          >
            {buttonText}
          </Link>
        ) : (
          <button
            onClick={handleClick}
            className={clsx(
              "block w-full rounded-md p-3 text-center text-base font-medium transition",
              active
                ? "bg-primary text-white hover:bg-primary/90"
                : "border border-stroke text-primary hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3"
            )}
          >
            {buttonText}
          </button>
        )}
      </div>
    </motion.div>
  );
};

// Feature list item
const List = ({ children }) => (
  <p className="flex items-start gap-2 text-base text-body-color dark:text-dark-6">
    <CheckCircle2 className="text-green-500 mt-1 h-5 w-5" />
    {children}
  </p>
);
