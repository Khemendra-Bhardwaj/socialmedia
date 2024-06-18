-- CreateTable
CREATE TABLE "Post" (
    "postid" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "authorid" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("postid")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorid_fkey" FOREIGN KEY ("authorid") REFERENCES "User"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;
