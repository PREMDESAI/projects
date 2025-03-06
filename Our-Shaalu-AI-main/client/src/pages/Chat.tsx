"use client";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const page = () => {
  type Conversation = Array<
    | {
        message: string;
        sender: "me";
      }
    | {
        sources: Array<
          Array<{
            title: string;
            link: string;
          }>
        >;
        answer: string;
        followUpQuestions: Array<string>;
        sender: "ai";
      }
  >;

  const [conversation, setConversation] = useState<Conversation | null>([]);

  const [chatStarted, setChatStarted] = useState(false);
  const [textLoading, setTextLoading] = useState(false);
  const [inputMsg, setInputMsg] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const fetchResponse = async (message: string) => {
    const res = await fetch(
      // "https://aimayhem-api.vercel.app/ai/search_engine",
      "http://localhost:3005/ai/search_engine",

      {
        method: "POST",
        body: JSON.stringify({ message }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((r) => r.json());
    console.log("here: ", res);

    setConversation((prev) => [...prev, { ...res, sender: "ai" }]);

    setTextLoading(false);
  };

  return (
    <>
      <div className="h-screen bg-[#e7caee] relative">
        <Link
          to="/"
          className="fixed top-[25px] left-[50px] text-[3rem] font-Jersey"
        >
          Shallu.ai
        </Link>
        <div className="flex justify-between">
          <div className="w-[calc(100%-20rem)] flex justify-center items-center mt-20 m-auto">
            <div
              style={{
                transition: "all 0.9s cubic-bezier(0.18, 0.89, 0.32, 1.28)",
              }}
              className={`flex flex-col items-center ${
                chatStarted ? "top-[15%]" : "top-[30%]"
              }`}
            >
              <div className="rounded-full bg-white m-auto inline-block overflow-hidden">
                <img
                  src="/ailady.png"
                  style={{
                    transition: "all 0.9s cubic-bezier(0.18, 0.89, 0.32, 1.28)",
                  }}
                  className={`${
                    chatStarted ? "h-[7rem] w-[7rem]" : "h-[10rem] w-[10rem]"
                  }`}
                />
              </div>
              <button
                onClick={() => {
                  setChatStarted(true);
                }}
                className={`py-3 px-3 mt-8 block m-auto font-["Merriweather"] bg-[#eca9fc] rounded-full border-gray-600 border-solid border ${
                  chatStarted ? "hidden" : null
                }`}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </button>
              <div
                style={{
                  transition: "all 0.9s cubic-bezier(0.18, 0.89, 0.32, 1.28)",
                }}
                className={`w-[60rem] mt-10 relative flex flex-col ${
                  chatStarted
                    ? "h-[24rem] opacity-100 overflow-y-auto"
                    : "h-0 opacity-0"
                }`}
              >
                <div className='mr-auto text-[20px] ml-[10px] text-left px-3 max-w-[35rem] py-2 mt-8 rounded-lg font-["Merriweather"]'>
                  {"Hey, how can i help you?"}
                </div>
                {conversation?.map((elem, i) => {
                  return elem.sender === "ai" ? (
                    <div
                      className={`${
                        !chatStarted && "hidden"
                      } mr-auto ml-[10px] text-left px-3 max-w-[35rem] py-2 mt-[12px] rounded-lg font-["Merriweather"]`}
                    >
                      <div className="text-lg flex justify-start gap-2 items-center mb-2">
                        <svg
                          className="w-5 h-5"
                          data-slot="icon"
                          fill="none"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                          ></path>
                        </svg>
                        <div>Sources</div>
                      </div>
                      <div className="flex justify-center gap-2 text-[0.8rem]">
                        {elem.sources.map((e) => {
                          return (
                            <Link
                              to={e[0].link}
                              target="_blank"
                              className="p-2 border border-solid border-black rounded-md flex  items-center text-justify hover:bg-gray-400 hover:cursor-pointer"
                            >
                              {e[0].title?.slice(0, 100) + "..."}
                            </Link>
                          );
                        })}
                      </div>
                      <div className="text-lg flex justify-start gap-2 items-center mb-2 mt-5">
                        <svg
                          className="w-5 h-5"
                          data-slot="icon"
                          fill="none"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                          ></path>
                        </svg>
                        <div>Answer</div>
                      </div>
                      <div className="p-2 mt-4 border border-solid border-black rounded-md flex items-center text-justify">
                        {elem.answer}
                      </div>
                      <div className="text-lg flex justify-start gap-2 items-center mb-2 mt-5">
                        <svg
                          className="w-5 h-5"
                          data-slot="icon"
                          fill="none"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                          ></path>
                        </svg>
                        <div>Related</div>
                      </div>
                      {elem.followUpQuestions.map((e) => {
                        return (
                          <div
                            onClick={() => {
                              setConversation((prevConv) => [
                                ...prevConv,
                                {
                                  message: e,
                                  sender: "me",
                                },
                              ]);
                              setTextLoading(true);
                              fetchResponse(e);
                            }}
                            className="p-2 mt-4 border border-solid border-black rounded-md flex items-center text-justify hover:bg-gray-400 hover:cursor-pointer"
                          >
                            {e}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div
                      key={i}
                      className='ml-auto mr-[10px] text-left mt-8 bg-[#eca9fc] px-3 max-w-96 py-2 rounded-lg font-["Merriweather"]'
                    >
                      {elem.message}
                    </div>
                  );
                })}
                {textLoading ? (
                  <div className="lds-ellipsis ml-5">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : null}

                <AlwaysScrollToBottom />
              </div>
              <div className="flex gap-8">
                <div
                  style={{
                    transition: "all 0.9s cubic-bezier(0.18, 0.89, 0.32, 1.28)",
                  }}
                  className={`h-12 w-[60rem] mt-10 translate-x-[32px] overflow-hidden bg-white border border-solid border-[#eca9fc] rounded-full shadow-md relative ${
                    chatStarted ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <input
                    value={inputMsg}
                    onKeyDown={async (e) => {
                      if (e.keyCode === 13) {
                        setConversation([
                          ...conversation!,
                          {
                            sender: "me",
                            message: inputMsg,
                          },
                        ]);
                        setTextLoading(true);
                        fetchResponse(inputMsg);
                        setInputMsg("");
                      }
                    }}
                    onChange={(e) => {
                      setInputMsg(e.target.value);
                    }}
                    className="absolute inset-0 px-4 outline-none"
                    placeholder="Talk to me"
                  />
                  <div
                    onClick={async () => {
                      setConversation([
                        ...conversation!,
                        {
                          sender: "me",
                          message: inputMsg,
                        },
                      ]);
                      setTextLoading(true);
                      fetchResponse(inputMsg);
                    }}
                    className="absolute right-[10px] bg-[#eca9fc] rounded-full p-2 top-1/2 -translate-y-1/2 cursor-pointer"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setChatStarted(false);
                  }}
                  className={`py-3 px-3 mt-8 block m-auto translate-x-[32px] cursor-pointer font-["Merriweather"] bg-[#eca9fc] rounded-full border-gray-600 border-solid border ${
                    chatStarted ? null : "hidden"
                  }`}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 3.75 18 6m0 0 2.25 2.25M18 6l2.25-2.25M18 6l-2.25 2.25m1.5 13.5c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  //@ts-ignore
  useEffect(() => elementRef.current.scrollIntoView());
  //@ts-ignore
  return <div ref={elementRef} />;
};
