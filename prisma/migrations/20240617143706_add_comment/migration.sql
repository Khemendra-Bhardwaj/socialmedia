-- CreateTable
CREATE TABLE "Comment" (
    "commentid" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "parentPostid" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("commentid")
);

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_parentPostid_fkey" FOREIGN KEY ("parentPostid") REFERENCES "Post"("postid") ON DELETE RESTRICT ON UPDATE CASCADE;
