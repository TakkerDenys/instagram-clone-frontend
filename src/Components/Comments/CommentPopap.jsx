import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React from "react";
import {
  BsThreeDots,
  BsBookmark,
  BsBookmarkFill,
  BsEmojiSmile,
} from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import { Comment } from "./Comment";
import "./Comment.css";

const CommentPopap = ({
  onClose,
  isOpen,
  likedPost,
  savedPost,
  itemSavedPost,
  itemLikedPost,
}) => {
  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="flex h-[75vh]">
              <div className="w-[45%] flex flex-col justify-center">
                <img
                  className="max-h-full w-full"
                  src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className="w-[55%] pl-10 relative">
                <div className="flex justify-between items-center py-5">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="w-9 h-9 rounded-full"
                        src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-2">
                      <p>username</p>
                    </div>
                  </div>
                  <BsThreeDots />
                </div>
                <hr />
                <div className="comment">
                  {[1, 1, 1, 1, 1, 1].map(() => (
                    <Comment />
                  ))}
                </div>
                <hr />
                <div className="absolute bottom-0 w-[90%]">
                  <div className="flex justify-between items-center w-full py-2">
                    <div className="flex items-center space-x-2">
                      {likedPost ? (
                        <AiFillHeart
                          className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
                          onClick={itemLikedPost}
                        />
                      ) : (
                        <AiOutlineHeart
                          className="text-2xl cursor-pointer"
                          onClick={itemLikedPost}
                        />
                      )}
                      <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
                      <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
                    </div>
                    <div className="cursor-pointer">
                      {savedPost ? (
                        <BsBookmarkFill
                          className="text-xl hover:opacity-50 cursor-pointer"
                          onClick={itemSavedPost}
                        />
                      ) : (
                        <BsBookmark
                          className="text-xl hover:opacity-50 cursor-pointer"
                          onClick={itemSavedPost}
                        />
                      )}
                    </div>
                  </div>
                  <div className="w-full py-2">
                    <p>Позначки «Подобається»: 4</p>
                    <p className="opacity-50 tetx-sm">2 дн. ТОМУ</p>
                  </div>
                  <hr />
                  <div className="flex items-center w-full">
                    <BsEmojiSmile />
                    <input
                      className="add_comment"
                      type="text"
                      placeholder="Додайте коментар..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CommentPopap;