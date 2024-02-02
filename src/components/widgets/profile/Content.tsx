"use client";

// libraries
import {useState} from "react";

// components
import Information from "@/components/widgets/profile/Information";
import EditForm from "@/components/widgets/profile/EditForm";
import SecurityForm from "@/components/widgets/profile/SecurityForm";

// modules
import {Tabs, TabList, TabItem} from "@/modules/Tabs";

// helpers
import {FadeTransition} from "@/modules/Transition";

// utils
import {profileTabList} from "@/utils/constants";

const Content = () => {

    const [activeTab, setActiveTab] = useState("user-information");

    return (
        <div className="flex flex-col justify-start items-center gap-y-4 w-full h-full">

            <Tabs>

                <TabList>

                    {
                        profileTabList.map(profileTab =>
                            <TabItem
                                key={profileTab.id}
                                tabItem={profileTab}
                                activeTab={activeTab}
                                setActiveTab={(value) => setActiveTab(value)}
                            />
                        )
                    }

                </TabList>

                <FadeTransition active={activeTab === "user-information"}>
                    <Information/>
                </FadeTransition>

                <FadeTransition active={activeTab === "edit-information"}>
                    <EditForm/>
                </FadeTransition>

                <FadeTransition active={activeTab === "edit-password"}>
                    <SecurityForm/>
                </FadeTransition>

            </Tabs>

        </div>
    )
}

export default Content;