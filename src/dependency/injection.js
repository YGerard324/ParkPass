// User
const UserRepository = require("../repository/UserRepository");
const UserApplication = require("../application/UserApplication");
const UserFacade = require("../facade/UserFacade");

const userRepository = new UserRepository();
const userApplication = new UserApplication(userRepository);
const userFacade = new UserFacade(userApplication);
//User

// Address
const AddressRepository = require("../repository/AddressRepository");
const AddressApplication = require("../application/AddressApplication");
const AddressFacade = require("../facade/AddressFacade");

const addressRepository = new AddressRepository();
const addressApplication = new AddressApplication(addressRepository);
const addressFacade = new AddressFacade(addressApplication);
// Address

//Parking
const ParkingRepository = require("../repository/ParkingRepository");
const ParkingApplication = require("../application/ParkingApplication");
const ParkingFacade = require("../facade/ParkingFacade");

const parkingRepository = new ParkingRepository();
const parkingApplication = new ParkingApplication(parkingRepository);
const parkingFacade = new ParkingFacade(parkingApplication);
//Parking

// Payment
const PaymentRepository = require("../repository/PaymentRepository");
const PaymentApplication = require("../application/PaymentApplication");
const PaymentFacade = require("../facade/PaymentFacade");
const PaymentFactory = require("../factory/PaymentFactory");

const paymentRepository = new PaymentRepository();
const paymentApplication = new PaymentApplication(paymentRepository);
const paymentFacade = new PaymentFacade(paymentApplication);
// Payment

// Register
const RegisterRepository = require("../repository/RegisterRepository");
const RegisterApplication = require("../application/RegisterApplication");
const RegisterFacade = require("../facade/RegisterFacade");

const registerRepository = new RegisterRepository();
const registerApplication = new RegisterApplication(registerRepository);
const registerFacade = new RegisterFacade(registerApplication);
// Register

// PaymentType
const PaymentTypeRepository = require("../repository/PaymentTypeRepository");
const PaymentTypeApplication = require("../application/PaymentTypeApplication");
const PaymentTypeFacade = require("../facade/PaymentTypeFacade");

const paymentTypeRepository = new PaymentTypeRepository();
const paymentTypeApplication = new PaymentTypeApplication(paymentTypeRepository);
const paymentTypeFacade = new PaymentTypeFacade(paymentTypeApplication);
// PaymentType

// ParkingSpace
const ParkingSpaceRepository = require("../repository/ParkingSpaceRepository");
const ParkingSpaceApplication = require("../application/ParkingSpaceApplication");
const ParkingSpaceFacade = require("../facade/ParkingSpaceFacade");

const parkingSpaceRepository = new ParkingSpaceRepository();
const parkingSpaceApplication = new ParkingSpaceApplication(parkingSpaceRepository);
const parkingSpaceFacade = new ParkingSpaceFacade(parkingSpaceApplication);
// ParkingSpaces

module.exports = {
  userFacade,
  addressFacade,
  parkingFacade,
  paymentFacade,
  registerFacade,
  paymentTypeFacade,
  parkingSpaceFacade,
  PaymentFactory,
};
