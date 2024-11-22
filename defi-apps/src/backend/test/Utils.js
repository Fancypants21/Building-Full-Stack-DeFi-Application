const { ethers } = require("hardhat");
const toWei = (num) => ethers.parseEther(num.toString());
const fromWei = (num) => ethers.formatEther(num);
const delay = ms => new Promise(res => setTimeout(res, ms));
exports.toWei = toWei;
exports.fromWei = fromWei;
exports.delay = delay;
