import express from "express";
import {
  addNewAuctionItem,
  getAllItems,
  getAuctionDetails,
  getMyAuctionItems,
  removeFromAuction,
  republishItem,
} from "../controller/auctionItemController.js";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";
import { trackCommissionStatus } from "../middlewares/trackCommissionStatus.js";

const router = express.Router();

router.post(
  "/create",
  isAuthenticated,
  isAuthorized("Auctioner"),
  trackCommissionStatus,
  addNewAuctionItem
);

router.get("/allitems", getAllItems);

router.get("/auction/:id", isAuthenticated, getAuctionDetails);

router.get(
  "/myitems",
  isAuthenticated,
  isAuthorized("Auctioner"),
  getMyAuctionItems
);

router.delete(
  "/delete/:id",
  isAuthenticated,
  isAuthorized("Auctioner"),
  removeFromAuction
);

router.put(
  "/item/republish/:id",
  isAuthenticated,
  isAuthorized("Auctioner"),
  republishItem
);

export default router;
