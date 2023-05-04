import PricingCard from "@/Components/PricingCard";
import Authenticated from "@/Layouts/Authenticated";

export default function Subscription() {
    return (
        <Authenticated>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* <!-- START: Content --> */}
                <div className=" px-[50px]">
                    <div className="py-20 flex flex-col items-center">
                        <div className="text-black font-semibold text-[26px] mb-3">
                            Pricing for Everyone
                        </div>
                        <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                            Invest your little money to get a whole new
                            experiences from movies.
                        </p>

                        {/* <!-- Pricing Card --> */}
                        <div className="flex justify-center gap-10 mt-[70px]">
                            <PricingCard
                                name="Basic"
                                price="299000"
                                durationInMonth="3"
                                features={[
                                    "features 1",
                                    "features 2",
                                    "features 3",
                                ]}
                            />
                            <PricingCard
                                isPremium={true}
                                name="Premium"
                                price="800.000"
                                durationInMonth="3"
                                features={[
                                    "features 1",
                                    "features 2",
                                    "features 3",
                                    "features 4",
                                    "features 5",
                                ]}
                            />
                        </div>
                        {/* <!-- /Pricing Card --> */}
                    </div>
                </div>
                {/* <!-- END: Content --> */}
            </div>
        </Authenticated>
    );
}
