export function ApplyCommission(
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalValue = descriptor.get;

  descriptor.get = function () {
    const basePrice = originalValue?.call(this);
    return Number.isNaN(basePrice * 1.2) ? 'N/A (No Decorator)' : basePrice * 1.2;
  };
  return descriptor;
}
