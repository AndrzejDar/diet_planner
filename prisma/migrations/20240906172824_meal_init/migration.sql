BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Menu] (
    [id] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Menu_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Menu_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[UserMeal] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [multiplier] INT NOT NULL,
    [menuId] NVARCHAR(1000) NOT NULL,
    [mealId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [UserMeal_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Meal] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [userMealId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Meal_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Menu] ADD CONSTRAINT [Menu_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[UserMeal] ADD CONSTRAINT [UserMeal_menuId_fkey] FOREIGN KEY ([menuId]) REFERENCES [dbo].[Menu]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[UserMeal] ADD CONSTRAINT [UserMeal_mealId_fkey] FOREIGN KEY ([mealId]) REFERENCES [dbo].[Meal]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
